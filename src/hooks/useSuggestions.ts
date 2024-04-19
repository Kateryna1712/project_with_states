import { getSuggestions } from "../api/api-operations";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Suggestion } from "../types/Suggestions.type";

export const useSuggestions = () => {
  const suggestions: UseQueryResult<Suggestion[], Error> = useQuery({
    queryKey: ["autoSuggestData"],
    queryFn: getSuggestions,
  });
  return suggestions;
};
