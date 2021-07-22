import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Table } from '../comps';
import { images } from '../utils/Images';

const Test = (props) => {
    const [loading, setLoading] = useState(false)
    const data = [
        {
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "name": "Do Van B",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "name": "Nguyen Thi Hoang C",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
        {
            "name": "Nguyen Thi A",
            "address": "TP.HCM",
            "company": "Mobifone",
            "position": "Engineer"
        },
    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Table
                data={data}
                table
                numColumn={4}
                headers={["Họ tên", "Địa Chỉ", "Công ty", "Vị trí"]}
                headerStyle={{ icon: { size: 15 }, text: { size: 12 } }}
                headerIcons={[images.user, images.debtPercent, images.company, images.productivitySub]}
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
            />
        </SafeAreaView>
    );
}

export default Test;