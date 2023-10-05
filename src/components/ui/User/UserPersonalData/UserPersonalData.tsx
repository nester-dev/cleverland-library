import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Typo } from "@/components/ui";
import PersonalDataForm from "@/components/ui/User/UserPersonalData/PersonalDataForm.tsx";
import PersonalDataFormButtons from "@/components/ui/User/UserPersonalData/PersonalDataFormButtons.tsx";
import { RegisterFormFields } from "@/components/ui/form/types.ts";
import { getDefaultPersonalData } from "@/components/ui/User/UserPersonalData/helper.ts";
import { IProfileProps } from "@/components/screens/Profile.tsx";

const UserPersonalData: FC<IProfileProps> = ({ user }) => {
  const defaultValues = getDefaultPersonalData(user);
  const [isEditing, setIsEditing] = useState(false);
  const methods = useForm<RegisterFormFields>({ defaultValues });

  const handleEdit = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Typo tag="h4">Учётные данные</Typo>
          <Typo color="gray-500">
            Здесь вы можете отредактировать информацию о себе
          </Typo>
        </div>

        <PersonalDataForm isEditing={isEditing} />

        <PersonalDataFormButtons isEditing={isEditing} onClick={handleEdit} />
      </div>
    </FormProvider>
  );
};

export default UserPersonalData;
