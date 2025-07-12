export const textToId = (text) => {
    return text.toLowerCase().split(' ').join('-');
};