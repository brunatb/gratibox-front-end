import styled from 'styled-components';
import { useState } from 'react';
import InfoPlan from './InfoPlan';
import InfoAdress from './InfoAdress';

export default function DeliveryInfo({
    selectedPlanInfo,
    setSelectedPlanInfo,
    selectedAdressInfo,
    setSelectedAdressInfo,
    renderAdress,
}) {
    const info = {
        plan: ['Plano', 'Entrega', 'Produtos'],
        adress: ['Nome completo', 'Endereço de entrega', 'CEP', 'Cidade'],
    };
    const [planInfo, setPlanInfo] = useState({
        Plano: ['Semanal', 'Mensal'],
        Entrega: [],
        Produtos: ['Chás', 'Incensos', 'Produtos Orgânicos'],
    });

    return (
        <DeliveryInfoContainer>
            {!renderAdress
                ? info.plan.map((name, i) => (
                      <InfoPlan
                          key={i}
                          name={name}
                          choices={planInfo}
                          setChoices={setPlanInfo}
                          selectedInfo={selectedPlanInfo}
                          setSelectedInfo={setSelectedPlanInfo}
                      />
                  ))
                : info.adress.map((name, i) => (
                      <InfoAdress
                          key={i}
                          name={name}
                          selectedInfo={selectedAdressInfo}
                          setSelectedInfo={setSelectedAdressInfo}
                      />
                  ))}
        </DeliveryInfoContainer>
    );
}

const DeliveryInfoContainer = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
        margin-bottom: 7px;
    }
`;
