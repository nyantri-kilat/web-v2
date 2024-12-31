export interface Address {
    id: string;
    name: string;
    country_name: string;
    country_code: string;
    administrative_division_level_1_name: string;
    administrative_division_level_1_type: string;
    administrative_division_level_2_name: string;
    administrative_division_level_2_type: string;
    administrative_division_level_3_name: string;
    administrative_division_level_3_type: string;
    postal_code: number;
    label: string;
    address: string;
    note: string;
    destination_contact_name: string;
    destination_contact_phone: string;
    is_default: boolean;
}