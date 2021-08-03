import React from 'react';
import SearchWidthDropDown from '.';
import { width } from '../../utils/Dimenssion';

const DemoSearch = (props) => {
    const data = [
        // { "id": 1, "phoneNumber": "Thuan","address":"ABC" },
        { "id": 2, "phoneNumber": '988334377', "address": "DEF" },
        { "id": 3, "phoneNumber": "0989554123", "address": "GHI" },
        { "id": 4, "phoneNumber": "0989667453", "address": "KLM" },
        { "id": 5, "phoneNumber": "0355196256", "address": "XYZ" }
    ]
    return (
        <SearchWidthDropDown withDropdown placeholder="Nhập số điện thoại" dataNotFoundText="Không tìm thấy số điện thoại" data={data}
            fieldSearch={data.map((item) => item.phoneNumber)}
            searchIndex={1}
            onSelectValue={(value) => console.log(value)}
            style={{ marginTop: 50 }}
            width={width - 40} />
    );
}

export default DemoSearch;