export const imageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = ({ target }) => {
            resolve(target.result);
        };

        reader.onerror = () => {
            reject("Error reading file!");
        };
    });
};
