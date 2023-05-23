import { useState } from 'react';
import { BottomNavigation} from 'react-native-paper';
import { TabelaBrasileirao } from "../../fragments/tabela-brasileirao";
import { RodadasBrasileirao } from '../../fragments/rodadas-brasileirao';
import { BrasileiraoProvider } from '../../hooks/Brasileirao';
import { SobreBrasileirao } from '../../fragments/sobre-brasileirao';

export function Brasileirao() {

    const [index, setIndex] = useState(0);
    const [rotas] = useState([
        { key: 'tabela', title: 'Tabela', focusedIcon: 'format-list-numbered' },
        { key: 'rodada', title: 'Rodada', focusedIcon: 'soccer', unfocusedIcon: 'soccer-field' },
        { key: 'sobre', title: 'Sobre', focusedIcon: 'script-text' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        tabela: () => <TabelaBrasileirao />,
        rodada: () => <RodadasBrasileirao/>,
        sobre: () => <SobreBrasileirao/>
    });

    return <BrasileiraoProvider>
        <BottomNavigation
            navigationState={{ index, routes: rotas }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    </BrasileiraoProvider>
} 