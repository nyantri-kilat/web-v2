import { useApiUrl } from '$lib/functions/useApiUrl'
import { redirect } from '@sveltejs/kit'

export const load = async (event) => {
    const { cookies } = event;
    const isNewCreatedAddress = cookies.get('isNewCreatedAddress');
    if (isNewCreatedAddress == "true") {
        return {
            status: 302,
            redirect: '/address'
        }
    }
}

export const actions = {
    default: async ({ cookies, request }) => {
        const apiUrl = useApiUrl()
        const sessionId = cookies.get("sessionId")?.toString() || ""
        const body = await request.formData()
        const biteshipId = body.get('biteship_id')
        const name = body.get('name')
        const countryName = body.get('country_name')
        const countryCode = body.get('country_code')
        const administrativeDivisionLevel1Name = body.get('administrative_division_level_1_name')
        const administrativeDivisionLevel1Type = body.get('administrative_division_level_1_type')
        const administrativeDivisionLevel2Name = body.get('administrative_division_level_2_name')
        const administrativeDivisionLevel2Type = body.get('administrative_division_level_2_type')
        const administrativeDivisionLevel3Name = body.get('administrative_division_level_3_name')
        const administrativeDivisionLevel3Type = body.get('administrative_division_level_3_type')
        const postalCode = body.get('postal_code')
        const label = body.get('label')
        const address = body.get('address')
        const note = body.get('note')
        const destinationContactName = body.get('destination_contact_name')
        const destinationContactPhone = body.get('destination_contact_phone')
        const isDefault = body.get('is_default')
        try {
            await fetch(`${apiUrl}/address`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionId}`
                },
                body: JSON.stringify({
                    biteship_id: biteshipId,
                    name: name,
                    country_name: countryName,
                    country_code: countryCode,
                    administrative_division_level_1_name: administrativeDivisionLevel1Name,
                    administrative_division_level_1_type: administrativeDivisionLevel1Type,
                    administrative_division_level_2_name: administrativeDivisionLevel2Name,
                    administrative_division_level_2_type: administrativeDivisionLevel2Type,
                    administrative_division_level_3_name: administrativeDivisionLevel3Name,
                    administrative_division_level_3_type: administrativeDivisionLevel3Type,
                    postal_code: postalCode,
                    label: label,
                    address: address,
                    note: note,
                    destination_contact_name: destinationContactName,
                    destination_contact_phone: destinationContactPhone,
                    is_default: isDefault, // Apakah alamat utama
                }),
            });
            cookies.set('isNewCreatedAddress', 'true', {path: '/address'});
            return {
                status: 200,
                message: "Alamat berhasil ditambahkan"
            }
        } catch (error) {
            return {
                status: 500,
                message: "Terjadi kesalahan"
            }
        }
    }
}