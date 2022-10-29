import React from "react";
import { BoxFilter, InputFilter } from "./Filter.styled";


export const Filter = ({filter, onChange}) =>
    <BoxFilter htmlFor="">Find contacts by name
        <InputFilter
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
        />
    </BoxFilter>
;