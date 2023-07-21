import { GroupForm, Input, InputLabel } from "./formInput.styles.js";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupForm>
      <Input {...otherProps} />
      {label && (
        <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
      )}
    </GroupForm>
  );
};

export default FormInput;
