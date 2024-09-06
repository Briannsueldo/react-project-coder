
import { Categories } from './Categories';
import './CatDisplay.scss';
import { ShowProducts } from './components/ItemsListContainer';


import cpuCat from '../categoryImg/cpu.png';
import gpuCat from '../categoryImg/gpu.png';
import ramCat from '../categoryImg/ram.png';
import motherCat from '../categoryImg/motherboard.png';
import towerCat from '../categoryImg/cabinet.png';
import mouseCat from '../categoryImg/mouse.png';
import keyboardCat from '../categoryImg/keyboard.png';
import refriCat from '../categoryImg/refrigeration.png';
import padCat from '../categoryImg/mousepad.png';
import storageCat from '../categoryImg/storage.png';
import headsetCat from '../categoryImg/headset.png';
import chairCat from '../categoryImg/chair.png';
import notebookCat from '../categoryImg/notebook.png';
import screenCat from '../categoryImg/screen.png';

export const CatDisplay = () => {
    return <>
        <div className='mainContainer'>
            <div className="categories-container">
                <Categories category='CPU' image={cpuCat}/>
                <Categories category='GPU' image={gpuCat}/>
                <Categories category='Ram' image={ramCat}/>
                <Categories category='Motherboard' image={motherCat}/>
                <Categories category='Tower' image={towerCat}/>
                <Categories category='Mouse' image={mouseCat}/>
                <Categories category='Keyboard' image={keyboardCat}/>
                <Categories category='Refrigeration' image={refriCat}/>
                <Categories category='Mousepad' image={padCat}/>
                <Categories category='Storage' image={storageCat}/>
                <Categories category='Headset' image={headsetCat}/>
                <Categories category='Chair' image={chairCat}/>
                <Categories category='Notebook' image={notebookCat}/>
                <Categories category='Screen' image={screenCat}/>
            </div>
            <div className="display-container">
                <ShowProducts/>
            </div>
        </div>
    </>
}