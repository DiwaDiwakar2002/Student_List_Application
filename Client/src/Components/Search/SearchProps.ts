import React from "react";

interface SearchProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default SearchProps;