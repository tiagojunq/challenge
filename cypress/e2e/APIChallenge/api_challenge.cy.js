describe("API Challenge - Test Suite", () => {
  let userName;

  before(() => {
    const unixTimeStamp = Date.now();
    userName = `tiago_${unixTimeStamp}`;

    cy.log("#1 - Criar um usuário");
    cy.createNewUser(userName, "Qwer1234*");
  });

  beforeEach(() => {
    cy.log("#2 - Gerar um Token de acesso e confirmar Status 200");
    cy.apiToken(userName, "Qwer1234*");
  });

  after(() => {
    //Deleter a massa do usuário:
    const token = Cypress.env("token");
    const authorization = `Bearer ${token}`;

    const userId = Cypress.env("userId");

    cy.request({
      method: "DELETE",
      url: `/Account/v1/User/${userId}`,
      headers: {
        authorization,
      },
    }).should(({ status }) => {
      expect(status).to.eq(204);
    });
  });

  it("#3 - Confirmar se o usuário criado está autorizado", () => {
    cy.log("#3 - Confirmar se o usuário criado está autorizado");
    cy.request({
      method: "POST",
      url: "/Account/v1/Authorized",
      body: {
        userName: userName,
        password: "Qwer1234*",
      },
    }).should(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.eq(true);
    });
  });

  it("#4 - Listar os livros disponíveis", () => {
    cy.request({
      method: "GET",
      url: "/BookStore/v1/Books",
    })
      .then((response) => {
        Cypress.env("book1", response.body.books[0].isbn);
        Cypress.env("book2", response.body.books[1].isbn);
        return response;
      })
      .its("status")
      .should("eq", 200);
  });

  it("#5 - Alugar dois livros de livre escolha", () => {
    const token = Cypress.env("token");
    const authorization = `Bearer ${token}`;

    const userId = Cypress.env("userId");
    const book1 = Cypress.env("book1");
    const book2 = Cypress.env("book2");

    cy.request({
      method: "POST",
      url: "/BookStore/v1/Books",
      body: {
        userId: userId,
        collectionOfIsbns: [
          {
            isbn: book1,
          },
        ],
      },
      headers: {
        authorization,
      },
    })
      .its("status")
      .should("eq", 201);

    cy.request({
      method: "POST",
      url: "/BookStore/v1/Books",
      body: {
        userId: userId,
        collectionOfIsbns: [
          {
            isbn: book2,
          },
        ],
      },
      headers: {
        authorization,
      },
    })
      .its("status")
      .should("eq", 201);
  });

  it("#6 - Listar os detalhes do usuário com os livros escolhidos", () => {
    const token = Cypress.env("token");
    const authorization = `Bearer ${token}`;

    const userId = Cypress.env("userId");
    const book1 = Cypress.env("book1");
    const book2 = Cypress.env("book2");

    cy.request({
      method: "GET",
      url: `/Account/v1/User/${userId}`,
      headers: {
        authorization,
      },
    }).should(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.books[0].isbn).to.eq(book1);
      expect(body.books[1].isbn).to.eq(book2);
    });
  });
});
