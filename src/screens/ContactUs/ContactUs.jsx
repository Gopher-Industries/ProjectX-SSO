import React from "react";
import * as s from "./ContactUs.style";

import IconCard from "@Components/IconCard/IconCard";
import Card from "@Components/Card/Card";
import ContactForm from "@Components/ContactForm/ContactForm";
import PageContainer, {PageHeader} from "@Layout/Page/Page.style"

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

const ContactUs = () => {


    return (
        <PageContainer>
            <s.ContactUsContainer>
                <s.ContactUsRow>
                    <PageHeader>Contact Us</PageHeader>
                </s.ContactUsRow>
                <s.ContactUsRow>
                    <IconCard icon={<RoomOutlinedIcon />} heading={"Find Us"} callToAction={"Deakin's Burwood Campus"} size={"medium"} animate={true}>
                            221 Burwood Hwy, Burwood VIC 3125
                    </IconCard>
                    <IconCard icon={<EmailOutlinedIcon />} heading={"Email Us"} size={"small"} animate={true}>
                        bahar.nakisa@deakin.edu.au<br/>karmakar@deakin.edu.au
                    </IconCard>
                    <IconCard icon={<PhoneInTalkOutlinedIcon />} heading={"Call Us"} size={"small"} animate={true}>
                        Bahareh Nakisa +613 5227 3816<br/>Chandan Karmakar +613 5227 3079
                    </IconCard>
                </s.ContactUsRow>
                <s.ContactUsRow>
                    <Card animate={true}>
                        <ContactForm />
                    </Card>
                </s.ContactUsRow>
            </s.ContactUsContainer>
        </PageContainer>
    );
};

export default ContactUs;
