import { ExchangeForm } from './components/ExchangeForm';
import { Ratio } from './components/ExchangeRatio';
import { ExchangeTitle } from './components/ExchangeTitle';

export const Exchange = () => {
    return (
        <div>
            <ExchangeTitle />
            <Ratio />
            <ExchangeForm />
        </div>
    );
};
