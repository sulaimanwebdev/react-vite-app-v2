import BillingHistoryTable from "../components/BillingHistoryTable";
import SettingsTabs from "../components/SettingsTabs";


const DataTable = [
    {
        date: "Sep 22, 2021",
        number: "LOC6288246AT",
        product: "LoChat Premium",
        price: "25,00 €"
    },
    {
        date: "Sep 22, 2021",
        number: "LOC6288246AT",
        product: "LoChat Premium",
        price: "25,00 €"
    },
    {
        date: "Sep 22, 2021",
        number: "LOC6288246AT",
        product: "LoChat Premium",
        price: "25,00 €"
    },
    {
        date: "Sep 22, 2021",
        number: "LOC6288246AT",
        product: "LoChat Premium",
        price: "25,00 €"
    },
]

const BillingHistory = () => {
  return (
    <div className="px-10">
      <SettingsTabs />

      <h3 className="text-xl font-bold mt-16 text-gray-800">Billing history</h3>

      <BillingHistoryTable data={DataTable} />
    </div>
  );
};

export default BillingHistory;
