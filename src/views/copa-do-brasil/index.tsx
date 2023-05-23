import { BottomNavigation } from "react-native-paper";
import { RodadaCopaDoBrasil } from "../../fragments/rodadas-copadobrasil";
import { useState } from "react"
import { CopaDoBrasilProvider } from "../../hooks/CopaDoBrasil";
import { SobreCopaDoBrasil } from "../../fragments/sobre-copadobrasil";

export function CopaDoBrasil() {

    const [index, setIndex] = useState(0);
    const [rotas] = useState([
        { key: 'rodada', title: 'Rodada', focusedIcon: 'soccer', unfocusedIcon: 'soccer-field' },
        { key: 'sobre', title: 'Sobre', focusedIcon: 'script-text' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        rodada: () => <RodadaCopaDoBrasil />,
        sobre: () => <SobreCopaDoBrasil/>
    });

    return <CopaDoBrasilProvider>
        <BottomNavigation
            navigationState={{ index, routes: rotas }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    </CopaDoBrasilProvider>
}