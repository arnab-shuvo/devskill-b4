import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid Email address!")
        .required("Email is required!"),
    password: Yup.string()
        .required("Can't login without a Password!")
        .min(8)
        .max(20),
});

export const signupInitials = {
    email: "",
    password: "",
    repassword: "",
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
};

export const signupValidation = Yup.object({
    email: Yup.string()
        .email("Invalid Email address!")
        .required("Email is required!"),
    password: Yup.string().min(8).max(20).required("Password can't be empty!"),
    repassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match!")
        .required("Enter first password again!"),
    username: Yup.string("Username can't be just numbers!").required(
        "Username is required!",
    ),
    // role: Yup.string().required("Role must be defined!"),
    firstname: Yup.string("Name can't be just numbers!").required(
        "First name is required!",
    ),
    lastname: Yup.string("Name can't be just numbers!").required(
        "Last name is required!",
    ),
    city: Yup.string("City can't be just numbers!").required(
        "City name is required!",
    ),
    street: Yup.string("Street Can't be just numbers!").required(
        "Street name is required!",
    ),
    number: Yup.number("House No. must be a number").required(
        "House No. is required!",
    ),
    zipcode: Yup.string().required("Zipcode is required!"),
    lat: Yup.number("Latitude has to be a number!").required(
        "Latitude is required!",
    ),
    long: Yup.number("Longitude has to be a number!").required(
        "Longitude is required!",
    ),
    phone: Yup.string().required("Phone Number is required!"),
});

export const categoryValidation = Yup.object({
    name: Yup.string().required("Category must have a name!"),
    description: Yup.string().required("Description is required"),
    image: Yup.mixed()
        .required("Image is required")
        .test(
            "fileFormat",
            "Unsupported Format",
            (value) =>
                value &&
                ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(
                    value.type,
                ),
        ),
});

export const productValidation = Yup.object({
    title: Yup.string().required("Title is required"),
    price: Yup.number()
        .required("Price is required")
        .min(0, "Price can't be less than 0"),
    description: Yup.string().required("Description is required"),
    stock: Yup.number()
        .required("Stock is required")
        .min(0, "Stock can't be less than 0"),
    image: Yup.mixed()
        .required("Image is required")
        .test(
            "fileFormat",
            "Unsupported Format",
            (value) =>
                value &&
                ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(
                    value.type,
                ),
        ),
});
