//^ This unit test will test the POST controller function

//^ Importing the POST controller function
const { post_reload } = require("../controllers/reloadController");
//^ Importing the Reload Model
const Reload = require("../models/reloadModel");

jest.mock("../models/reloadModel", () => ({
    create: jest.fn()
}))

describe("POST Reload", () => {
    it("Shoule POST a reload to the DB", async () => {

        //^ Making the request object
        const req =  {
            user: {
                _id: "user_id",
                email: "test@gmail.com"
            },

            body: {
                user_title: "9mm Reload",
                bullet_head_make: "Hornady",
                bullet_head_type: "Hollow",
                bullet_weight: "104 grain",
                powder_make: "Hodgdon",
                powder_type: "N550",
                powder_weight: "5 grains",
                casing_make: "Federal",
                primer_make: "Fedra;",
            }
        }

        //^ Making the response object
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        const reload = {
            _id: "reload_id",
            user_email: req.user.email,
            user_title: req.body.user_title,
            bullet_head_make: req.body.bullet_head_make,
            bullet_head_type: req.body.bullet_head_type,
            bullet_weight: req.body.bullet_weight,
            powder_make: req.body.powder_make,
            powder_type: req.body.powder_type,
            powder_weight: req.body.powder_weight,
            casing_make: req.body.casing_make,
            primer_make: req.body.primer_make,
            user_id: req.user._id,
        }

        Reload.create.mockResolvedValue(reload);

        await post_reload(req, res);

        expect(Reload.create).toHaveBeenCalledWith({
            user_email: req.user.email,
            user_title: req.body.user_title,
            bullet_head_make: req.body.bullet_head_make,
            bullet_head_type: req.body.bullet_head_type,
            bullet_weight: req.body.bullet_weight,
            powder_make: req.body.powder_make,
            powder_type: req.body.powder_type,
            powder_weight: req.body.powder_weight,
            casing_make: req.body.casing_make,
            primer_make: req.body.primer_make,
            user_id: req.user._id,
          });
      
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.json).toHaveBeenCalledWith(reload);
    })
})