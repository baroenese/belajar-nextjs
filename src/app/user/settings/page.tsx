import MyLayout from "@/main/layouts";
import SettingsBtn from "./_internal/components/settings-btn";
import Btn from "@/main/components/btn";

export default function Page() {
    return (
        <MyLayout>
            <>
                <div>Settings</div>
                <SettingsBtn />
                <Btn title="Coba btn" />
            </>
        </MyLayout>
    )
}