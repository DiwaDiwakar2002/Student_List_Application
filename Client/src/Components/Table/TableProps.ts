import React from "react";

interface TableProps {
    searchText: string;
}

export default TableProps;

export interface StudentData {
    id: number;
    name: string;
    email: string;
    number: string;
    enroll_number: string;
    date_of_admission: string;
  }