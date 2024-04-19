import axios from "axios";

const AUTOCOMPLETE_DATA_LINK = "https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete";

export const getSuggestions = async () => {
  try {
    const { data } = await axios(AUTOCOMPLETE_DATA_LINK);

    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
