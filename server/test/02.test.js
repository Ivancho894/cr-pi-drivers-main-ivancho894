const { conn, Driver, Team } = require("../src/db.js");

describe("Modelos DB", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  describe("Driver", () => {
    test("Debe existir", () => {
      const Driver = conn.models.Driver;
      expect(Driver).toBeDefined();
    });

    test("Debe tener las propiedades correctas", async () => {
      const driver = await Driver.build({
        name: "Giancarlo",
        lastname: "Baghetti" ,
        image: "d",
        dayofbirth: "1934-12-25",
        nationality: "Italian",
        teams: "Ferrari, Automobili Turismo e Sport, Scuderia Centro Sud, Brabham, Reg Parnell, Lotus",
        description: "Giancarlo Baghetti (25 December 1934 27 November 1995) wlis 500, just 17 days after Farina."
      });
      const keys = ['id','name','lastname','image','dayofbirth','nationality','description'];
      expect(Object.keys(driver.toJSON())).toEqual(keys);
    });

    test("No debe contener los timestamps automáticos: createdAt y updatedAt", async () => {
      const driver = await Driver.build({
        name: "Giancarlo",
        lastname: "Baghetti" ,
        image: "d",
        dayofbirth: "1934-12-25",
        nationality: "Italian",
        teams: "Ferrari, Automobili Turismo e Sport, Scuderia Centro Sud, Brabham, Reg Parnell, Lotus",
        description: "Giancarlo Baghetti (25 December 1934 27 November 1995) wlis 500, just 17 days after Farina."
      });
      const timestamps = ['createdAt', 'updatedAt'];
      expect(Object.keys(driver.toJSON())).not.toEqual(expect.arrayContaining(timestamps));
    })
  });


  afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
  });
});
