import { useDirection } from '../../hooks/use-direction/useDirection';
import { CurrencyISOType } from '../../utils/currency/currency.util';
import { ExchangeForm } from './ExchangeForm';

interface ExchangeProps {
    currencies: CurrencyISOType[];
}

export const Exchange = ({ currencies }: ExchangeProps) => {
    const [currencyPrimary] = currencies;
    const { direction, directionReversed, isDirectionOut, toggleDirection } =
        useDirection();
    const ratio = 1.3971;

    return (
        <div>
            <h1 data-testid="title">
                {isDirectionOut ? 'Sell' : 'Buy'} {currencyPrimary}
            </h1>

            <p>Ratio: {ratio}</p>

            <ExchangeForm
                currencies={currencies}
                ratio={ratio}
                direction={direction}
                directionReversed={directionReversed}
                toggleDirection={toggleDirection}
            />
        </div>
    );
};
