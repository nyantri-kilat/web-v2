export const load = async (event) => {
    const { cookies } = event;
    const isNewCreatedAddress = cookies.get('isNewCreatedAddress');
    if (isNewCreatedAddress) {
        cookies.delete('isNewCreatedAddress', {path: '/address'});
    }
}