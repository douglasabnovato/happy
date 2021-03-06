import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus} from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanage-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Logo da Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
            
                <footer>
                    <strong>Juiz de Fora</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>
            <Map
                center={[-21.7288846, -43.4525616]} 
                zoom={13}
                style={{width:'100%', height:'100%'}}                
            >    
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                /> 
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;