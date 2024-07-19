"use client"

import FormUserCreateUser from "../component/form-create-user"

import MyLayout from "@/main/layouts";

export default function CreateUser() {
    return (
        <MyLayout>
            <p>Create user</p>
            <FormUserCreateUser />
        </MyLayout>
    )
}