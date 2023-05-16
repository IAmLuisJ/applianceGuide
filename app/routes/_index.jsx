import BigQuestionForm from "../components/BigQuestionForm";
import Header from "../components/Header";
import QuickButtons from "../components/QuickButtons";
import Title from "../components/Title";
import Appliancequestionform from "../components/Appliancequestionform";
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
        <Appliancequestionform />
      <div className="w-fit mx-auto">
        <BigQuestionForm />
      </div>
    </div>
  );
}
