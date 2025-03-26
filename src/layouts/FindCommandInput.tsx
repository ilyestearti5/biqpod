import { Field } from "@/components/Fields/Field";
import { useTranslate } from "@/components/Translate";
export function FindCommandInput() {
  const [hint] = useTranslate("press ? for help");
  return <Field aria-multiline={false} placeholder={`${hint} 😊`} inputName="findCommand" />;
}
