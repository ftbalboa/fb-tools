const { LINK_ROUTE } = require("../../consts");


const ApiService = {
  getLinks: async () => {
      const res = await fetch(LINK_ROUTE, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(res.status > 399) {
          throw new Error(`Error ${res.status}`);
      }
      const resJson = await res.json();
      return resJson;
  },
  newLink: async ({title,url}) => {
    try {
      const res = await fetch(LINK_ROUTE, {
        method: "POST",
        body: JSON.stringify({ title, url }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.status == 201;
    } catch (e) {
      console.log(e);
      return e
    }
  },
  deleteLink: async (id) => {
    try {
      const res = await fetch(LINK_ROUTE, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.status == 200;
    } catch (e) {
      console.log(e);
      return e
    }
  },
};

module.exports = ApiService;
