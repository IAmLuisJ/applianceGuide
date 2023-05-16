import BigQuestionForm from "../components/BigQuestionForm";
import Header from "../components/Header";
import QuickButtons from "../components/QuickButtons";
import Title from "../components/Title";

export const meta = () => {
  return [{ title: "Guided Appliance Checkout" }];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Title />
      <div className="w-fit mx-auto">
        <QuickButtons />
      </div>

      <div className="w-fit mx-auto">
        <BigQuestionForm />
      </div>
    </div>
  );
}
