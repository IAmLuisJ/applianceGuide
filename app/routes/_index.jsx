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
        <QuickButtons
          leftButtonText="Washer Dryer Sets"
          leftButtonLink="https://www.bestbuy.com/site/washers-dryers/washer-dryer-sets/pcmcat303000050004.c?id=pcmcat303000050004"
          rightButtonText="Example of current packages"
          rightButtonLink="https://www.bestbuy.com/site/conditional-offers/samsung-offer/pcmcat1648662509679.c?id=pcmcat1648662509679"
        />
      </div>
      <div className="w-fit mx-auto">
        <BigQuestionForm />
        <Appliancequestionform />
      </div>
    </div>
  );
}
