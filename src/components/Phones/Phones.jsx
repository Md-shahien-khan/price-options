import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // eta automatic json() e convert kore ney
        // phone er price ta data r bahire amra price ta bhitore dibo
        // .then(data => setPhones(data.data.data));
        // eta te ekta problem hoy that eta data nije theke name diye data show kore tai age ekta extra data boshano hoise slug theke 
        // price


        // like slug = 'apple_iphone_12_pro-10508' ase sekhane theke split - eta diye apple and 10508 ke alada korbo
        //  0 : apple_iphone_12_pro
        // index 1: ashbe 10508
        // then slug.split('-')[1] dile '10508' pabo
        // then parseInt korbo parseInt(slug.split('-')[1]) eta dile 10508 number ashbe eta ebar multi line e niche kori

        .then(data =>{
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone =>{
                // /propteekt ta phone er moddhe phone_name ase
                const obj = {
                    name : phone.phone_name, 
                    price : parseInt(phone.slug.split('-')[1])
                }
                // prottek ta map kintu multi line return kore na so likhba return
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
            setLoading(false);
        })


    }, [])
    return (
        
        <div>
            {
              loading &&  <div className="text-center">
                <Audio
                height= "80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
              </div>
            }
            <h2 className="text-5xl">Phones : {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;