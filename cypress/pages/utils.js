import Chance from "chance";
import { faker} from "@faker-js/faker";
const chance = new Chance;

class Utils {


    bloodTypesAleatory = () => {
        return chance.pickone(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);
    }

    nationalityAleatory = () => {

        return faker.helpers.arrayElement (['Brazilian', 'Japanese', 'Afghan', 'Canadian', 'Egyptian',  'Argentinean', 'British', 'Danish', 'Cameroonian', 'Belgian',  'German', 'Mexican', 'Australian', 'Icelandic', 'Angolan',  'Russian', 'Indian','Portuguese', 'Italian', 'Thai',  'Greek', 'Nigerian', 'Swiss', 'Korean', 'Turkish',  'Cuban', 'Swedish', 'Chinese', 'Spanish', 'Irish']);

    }
    genderAleatory = () => {
        return chance.pickone(['Male', 'Female']);
    }  

    meritalStatusAleatory = () => {
        return chance.pickone (['Married','Single']);
    }

}


export default  Utils
    


