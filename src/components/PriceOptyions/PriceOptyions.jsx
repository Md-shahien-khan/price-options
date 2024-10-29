import PriceOption from "../PriceOption/PriceOption";
const PriceOptyions = () => {

    const priceOption = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym facilities",
            "Free introductory personal training session",
            "Group fitness classes",
            "Access to cardio machines",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to gym facilities",
            "Free introductory personal training session",
            "Unlimited group fitness classes",
            "Access to swimming pool",
            "Access to free weights area",
            "Discount on workshops and events"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 69.99,
          "features": [
            "Access to gym facilities",
            "Unlimited personal training sessions",
            "Unlimited group fitness classes",
            "Access to swimming pool and sauna",
            "Nutrition consultation",
            "Monthly wellness workshops",
            "Priority booking for classes"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 89.99,
          "features": [
            "Access for up to 4 family members",
            "Free introductory personal training session for each member",
            "Unlimited group fitness classes",
            "Access to swimming pool",
            "Family fitness events",
            "Discount on kids’ classes"
          ]
        },
        {
          "id": 5,
          "name": "Student Membership",
          "price": 19.99,
          "features": [
            "Access to gym facilities",
            "Discount on personal training sessions",
            "Access to group fitness classes",
            "Study and workout area",
            "Free guest pass each month"
          ]
        }
      ]
      

    return (
        <div className="m-12">
            <h2 className="text-3xl font-bold text-center">Best Prices in the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                priceOption.map(pOption => <PriceOption key={pOption.id} option={pOption}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptyions;