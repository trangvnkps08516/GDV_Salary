import React, { useState } from 'react';
import { Table } from '..';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';

function demo(props) {
    const [loading, setLoading] = useState(false)
    const data = [
        {
            "id":0,
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "id":1,
            "name": "Do Van B",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "id":2,
            "name": "Nguyen Thi Hoang C",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "id":4,
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "id":3,
            "name": "Nguyen Thi Giang",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "id":6,
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "id":80,
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
    ]
    return (
        <Table
            data={data}
            table
            numColumn={4}
            headers={["Họ tên", "Địa Chỉ", "Công ty", "Vị trí"]}
            headerStyle={{ icon: { size: 15 }, text: { size: 12 } }}
            headerIcons={[images.branch, images.company, images.workingShop, images.close]}
            lastIconHeader={images.day}
            widthArray={[150, 150, 150, 150]}
            fields={
                data.map((item) => [
                    item.name,
                    item.address,
                    item.company,
                    item.position
                ])
            }
            loading={loading}
            lastIcon={images.check}
            style={{ marginTop: fontScale(30) }}
            main={data.map((item, index) => index % 3 == 0 ? true : false)}
        />
    );
}

export default demo;