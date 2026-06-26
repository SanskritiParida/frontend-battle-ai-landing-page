export default function calculatePrice(price, billing) {

    if (billing === "annual") {

        return Math.round(price * 12 * 0.8);

    }

    return price;

}