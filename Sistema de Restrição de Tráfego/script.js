
        const sidebar = document.getElementById('sidebar');
        const mobileToggle = document.getElementById('mobile-toggle');

        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        const map = L.map('map', { zoomControl: true }).setView([-19.9227, -43.9392], 14);

        setTimeout(() => {
            map.invalidateSize();
        }, 200);

        const esriWorldStreet = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            attribution: 'Tiles &copy; Esri'
        });

        const esriWorldTopo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            attribution: 'Tiles &copy; Esri'
        });

        const cartoPositron = L.tileLayer('https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            attribution: '&copy; CARTO'
        });

        esriWorldStreet.addTo(map);

        const baseMaps = {
            "Esri Street Map": esriWorldStreet,
            "Esri Topográfico": esriWorldTopo,
            "Carto Light": cartoPositron
        };
        L.control.layers(baseMaps).addTo(map);

        const centralAreaCoords = [
            [-19.9135, -43.9455],
            [-19.9175, -43.9515],
            [-19.9255, -43.9525],
            [-19.9370, -43.9520],
            [-19.9440, -43.9380],
            [-19.9395, -43.9265],
            [-19.9300, -43.9210],
            [-19.9220, -43.9245],
            [-19.9145, -43.9300],
            [-19.9135, -43.9355]
        ];

        const centralAreaPoly = L.polygon(centralAreaCoords, {
            color: '#d97706',
            fillColor: '#f97316',
            fillOpacity: 0.35,
            weight: 2
        }).addTo(map);

        centralAreaPoly.bindPopup(`
      <b>Área Central de BH</b><br>
      Hipercentro, Savassi, Lourdes, Assembléia, Barro Preto, Hospitalar e Av. N. Sra. do Carmo.
    `);

        // Ruas do Hipercentro (Mapeamento interno dentro da Área Central)
        const hipercentroStreets = {
            "hc_santos_dumont": { name: "Av. Santos Dumont", coords: [-19.9150461, -43.940825] },
            "hc_oiapoque": { name: "Av. Oiapoque", coords: [-19.9149, -43.9416] },
            "hc_parana": { name: "Av. Paraná", coords: [-19.9189, -43.9410] },
            "hc_olegario_maciel": { name: "Av. Olegário Maciel", coords: [-19.9218, -43.9442] },
            "hc_augusto_de_lima": { name: "Av. Augusto de Lima", coords: [-19.9223, -43.9413] },
            "hc_caetes": { name: "Rua dos Caetés", coords: [-19.9173, -43.9392] },
            "hc_tupinambas": { name: "Rua dos Tupinambás", coords: [-19.9182, -43.9388] },
            "hc_carijos": { name: "Rua dos Carijós", coords: [-19.9192, -43.9382] },
            "hc_tamoios": { name: "Rua dos Tamoios", coords: [-19.9202, -43.9378] },
            "hc_tupis": { name: "Rua dos Tupis", coords: [-19.9212, -43.9373] },
            "hc_goitacazes": { name: "Rua dos Goitacazes", coords: [-19.9233, -43.9365] },
            "hc_guajajaras": { name: "Rua dos Guajajaras", coords: [-19.9244, -43.9361] },
            "hc_timbiras": { name: "Rua dos Timbiras", coords: [-19.9255, -43.9357] },
            "hc_esp_santo": { name: "Rua Espírito Santo", coords: [-19.9220, -43.9366] },
            "hc_bahia": { name: "Rua da Bahia", coords: [-19.9215, -43.9351] },
            "hc_rio_de_janeiro": { name: "Rua Rio de Janeiro", coords: [-19.9204, -43.9385] },
            "hc_sao_paulo": { name: "Rua São Paulo", coords: [-19.9210, -43.9402] },
            "hc_curitiba": { name: "Rua Curitiba", coords: [-19.9200, -43.9418] },
            "hc_santa_catarina": { name: "Rua Santa Catarina", coords: [-19.9234, -43.9439] },
            "hc_guaranis": { name: "Rua dos Guaranis", coords: [-19.9154274, -43.9421437] },
            "hc_guaicurus": { name: "Rua dos Guaicurus", coords: [-19.9150695, -43.9375275] },
            "hc_contorno": { name: "Av. do Contorno (ponto de referência)", coords: [-19.9142965, -43.9327826], referenceOnly: true },
            "hc_assis_chateaubriand": { name: "Av. Assis Chateaubriand", coords: [-19.9197424, -43.9340903] },
            "hc_praca_sete": { name: "Praça Sete de Setembro", coords: [-19.9191023, -43.9385851] },
            "hc_praca_estacao": { name: "Praça da Estação", coords: [-19.9168736, -43.9337983] },
            "hc_alfredo_balena": { name: "Av. Alfredo Balena", coords: [-19.9252519, -43.9292588] },
            "hc_alvares_cabral": { name: "Av. Álvares Cabral", coords: [-19.9275473, -43.9406223] },
            "hc_barbacena": { name: "Av. Barbacena", coords: [-19.9272436, -43.9511782] },
            "hc_bernardo_monteiro": { name: "Av. Bernardo Monteiro", coords: [-19.925774, -43.9279259] },
            "hc_bias_fortes": { name: "Av. Bias Fortes", coords: [-19.9312236, -43.9398481] },
            "hc_brasil": { name: "Av. Brasil", coords: [-19.9293352, -43.9310639] },
            "hc_carandai": { name: "Av. Carandaí", coords: [-19.9279812, -43.9294618] },
            "hc_francisco_sales": { name: "Av. Francisco Sales", coords: [-19.9208471, -43.928811] },
            "hc_getulio_vargas": { name: "Av. Getúlio Vargas", coords: [-19.9371313, -43.9338782] },
            "hc_joao_pinheiro": { name: "Av. João Pinheiro", coords: [-19.9279996, -43.9370071] },
            "hc_alagoas": { name: "Rua Alagoas", coords: [-19.9342903, -43.9359366] },
            "hc_alvares_maciel": { name: "Rua Álvares Maciel", coords: [-19.9239774, -43.924065] },
            "hc_alvarenga_peixoto": { name: "Rua Alvarenga Peixoto", coords: [-19.9276909, -43.9570128] },
            "hc_antonio_albuquerque": { name: "Rua Antônio de Albuquerque", coords: [-19.9372065, -43.9394673] },
            "hc_aquiles_lobo": { name: "Rua Aquiles Lobo", coords: [-19.9201138, -43.9311236] },
            "hc_araguari": { name: "Rua Araguari", coords: [-19.9304115, -43.9513723] },
            "hc_bernardo_guimaraes": { name: "Rua Bernardo Guimarães", coords: [-19.9296924, -43.9381348] },
            "hc_ceara": { name: "Rua Ceará", coords: [-19.9365832, -43.9296034] },
            "hc_claudio_manoel": { name: "Rua Cláudio Manoel", coords: [-19.9334519, -43.9334767] },
            "hc_dias_adorno": { name: "Rua Dias Adorno", coords: [-19.9311528, -43.9508106] },
            "hc_domingos_vieira": { name: "Rua Domingos Vieira", coords: [-19.9227465, -43.9237406] },
            "hc_aimores": { name: "Rua dos Aimorés", coords: [-19.9294534, -43.9337935] },
            "hc_inconfidentes": { name: "Rua dos Inconfidentes", coords: [-19.935724, -43.9348123] },
            "hc_otoni": { name: "Rua dos Otoni", coords: [-19.9256776, -43.9278657] },
            "hc_felipe_santos": { name: "Rua Felipe dos Santos", coords: [-19.9342519, -43.946334] },
            "hc_fernandes_tourinho": { name: "Rua Fernandes Tourinho", coords: [-19.9386497, -43.9388946] },
            "hc_goncalves_dias": { name: "Rua Gonçalves Dias", coords: [-19.9307392, -43.939282] },
            "hc_grao_para": { name: "Rua Grão Pará", coords: [-19.9264701, -43.9226777] },
            "hc_juiz_de_fora": { name: "Rua Juiz de Fora", coords: [-19.9257426, -43.954247] },
            "hc_levindo_lopes": { name: "Rua Levindo Lopes", coords: [-19.9377852, -43.9396384] },
            "hc_manaus": { name: "Rua Manaus", coords: [-19.9277464, -43.9216544] },
            "hc_maranhao": { name: "Rua Maranhão", coords: [-19.9352072, -43.9264341] },
            "hc_martim_carvalho": { name: "Rua Martim de Carvalho", coords: [-19.9300404, -43.9526961] },
            "hc_matias_cardoso": { name: "Rua Matias Cardoso", coords: [-19.9325301, -43.9531975] },
            "hc_mato_grosso": { name: "Rua Mato Grosso", coords: [-19.9208974, -43.9473611] },
            "hc_ouro_preto": { name: "Rua Ouro Preto", coords: [-19.9290721, -43.952374] },
            "hc_padre_belchior": { name: "Rua Padre Belchior", coords: [-19.923008, -43.9416943] },
            "hc_padre_marinho": { name: "Rua Padre Marinho", coords: [-19.9257052, -43.9223823] },
            "hc_padre_rolim": { name: "Rua Padre Rolim", coords: [-19.9276654, -43.9251428] },
            "hc_paraiba": { name: "Rua Paraíba", coords: [-19.9232012, -43.9217977] },
            "hc_paracatu": { name: "Rua Paracatu", coords: [-19.9229196, -43.952085] },
            "hc_pernambuco": { name: "Rua Pernambuco", coords: [-19.9314715, -43.9337249] },
            "hc_piaui": { name: "Rua Piauí", coords: [-19.9383029, -43.9287133] },
            "hc_prof_antonio_aleixo": { name: "Rua Professor Antônio Aleixo", coords: [-19.934104, -43.9414067] },
            "hc_prof_morais": { name: "Rua Professor Morais", coords: [-19.93434, -43.9303637] },
            "hc_rio_grande_norte": { name: "Rua Rio Grande do Norte", coords: [-19.9344375, -43.9317547] },
            "hc_rio_grande_sul": { name: "Rua Rio Grande do Sul", coords: [-19.9186027, -43.9453931] },
            "hc_romano_stochiero": { name: "Rua Romano Stochiero", coords: [-19.9273611, -43.9236264] },
            "hc_rodrigues_caldas": { name: "Rua Rodrigues Caldas", coords: [-19.9315239, -43.9519539] },
            "hc_santa_rita_durao": { name: "Rua Santa Rita Durão", coords: [-19.9346379, -43.9339743] },
            "hc_sergipe": { name: "Rua Sergipe", coords: [-19.9283094, -43.9356153] },
            "hc_tomas_gonzaga": { name: "Rua Tomás Gonzaga", coords: [-19.9327796, -43.9417401] },
            "hc_tome_souza": { name: "Rua Tomé de Souza", coords: [-19.9383589, -43.9293989] },
            "hc_uberaba": { name: "Rua Uberaba", coords: [-19.9238963, -43.9565022] },
            "hc_ulhoa_cintra": { name: "Rua Ulhoa Cintra", coords: [-19.9224721, -43.9222824] },
            "hc_praca_assembleia": { name: "Praça da Assembleia", coords: [-19.9315342, -43.9492964] },
            "hc_praca_liberdade": { name: "Praça da Liberdade", coords: [-19.9318722, -43.938041] },
            "hc_praca_floriano_peixoto": { name: "Praça Floriano Peixoto", coords: [-19.9231674, -43.91975] },
            "hc_praca_raul_soares": { name: "Praça Raul Soares", coords: [-19.9227404, -43.9451469] },
            "hc_alvaro_celso": { name: "Alameda Álvaro Celso", coords: [-19.9232244, -43.9294031] },
            "hc_ezequiel_dias": { name: "Alameda Ezequiel Dias", coords: [-19.9247411, -43.9319652] }
        };

        let activeStreetMarker = null;

        const corridorData = {
            "afonso_pena": { name: "Av. Afonso Pena — Av. do Contorno até Av. Bandeirantes", coords: [[-19.9220, -43.9360], [-19.9380, -43.9220], [-19.9510, -43.9160]] },
            "prudente_morais": { name: "Av. Prudente de Morais", coords: [[-19.9340, -43.9450], [-19.9480, -43.9500], [-19.9630, -43.9540]] },
            "raja_gabaglia": { name: "Av. Raja Gabaglia — Av. do Contorno até Av. Barão Homem de Melo", coords: [[-19.9400, -43.9450], [-19.9550, -43.9520], [-19.9710, -43.9620]] },
            "amazonas": { name: "Av. Amazonas — Av. do Contorno até Av. Silva Lobo", coords: [[-19.9250, -43.9400], [-19.9360, -43.9520], [-19.9470, -43.9660]] },
            "tereza_cristina": { name: "Av. Tereza Cristina — Av. do Contorno até Av. Silva Lobo", coords: [[-19.9250, -43.9510], [-19.9370, -43.9600], [-19.9480, -43.9700]] },
            "elevado_castelo_branco": { name: "Elevado Castelo Branco", coords: [[-19.9120, -43.9480], [-19.9080, -43.9550], [-19.9030, -43.9620]] },
            "dom_pedro_ii": { name: "Av. Dom Pedro II — Av. Nossa Senhora de Fátima até Av. Presidente Carlos Luz", coords: [[-19.9090, -43.9530], [-19.9000, -43.9610], [-19.8840, -43.9720]] },
            "antonio_carlos": { name: "Av. Presidente Antônio Carlos — Av. Nossa Senhora de Fátima até Av. Bernardo Vasconcelos", coords: [[-19.9090, -43.9530], [-19.9000, -43.9510], [-19.8870, -43.9490]] },
            "tuneis_lagoinha": { name: "Túneis Presidente Tancredo Neves e Prefeito Souza Lima (Túneis da Lagoinha)", coords: [[-19.9140, -43.9380], [-19.9110, -43.9430], [-19.9080, -43.9480]] },
            "cristiano_machado": { name: "Av. Cristiano Machado — Túneis da Lagoinha até Av. Silviano Brandão", coords: [[-19.9100, -43.9380], [-19.9010, -43.9290], [-19.8950, -43.9170]] },
            "andradas": { name: "Av. dos Andradas — Av. do Contorno até Av. Silviano Brandão", coords: [[-19.9220, -43.9330], [-19.9200, -43.9220], [-19.9180, -43.9110]] },
            "itajuba": { name: "Rua Itajubá — Av. do Contorno até Rua Pouso Alegre", coords: [[-19.9140, -43.9230], [-19.9110, -43.9190], [-19.9080, -43.9150]] },
            "pouso_alegre": { name: "Rua Pouso Alegre — Av. Flávio dos Santos até Rua Jacuí", coords: [[-19.8990, -43.9190], [-19.8950, -43.9200], [-19.8900, -43.9220]] },
            "jacui": { name: "Rua Jacuí — Rua Pouso Alegre até Av. Cristiano Machado", coords: [[-19.8900, -43.9220], [-19.8870, -43.9250], [-19.8840, -43.9280]] },
            "contorno_ceara_amazonas": { name: "Av. do Contorno — Rua Ceará até Av. Amazonas", coords: [[-19.9340, -43.9250], [-19.9300, -43.9310], [-19.9260, -43.9400]] },
            "contorno_amazonas_andaluzita": { name: "Av. do Contorno — Av. Amazonas até Rua Andaluzita", coords: [[-19.9260, -43.9400], [-19.9320, -43.9330], [-19.9390, -43.9250]] },
            "contorno_inconfidentes_ceara": { name: "Av. do Contorno — Rua dos Inconfidentes até Rua Ceará", coords: [[-19.9360, -43.9280], [-19.9340, -43.9260], [-19.9320, -43.9240]] },
            "contorno_andaluzita_afonso_pena": { name: "Av. do Contorno — Rua Andaluzita até Av. Afonso Pena", coords: [[-19.9390, -43.9250], [-19.9310, -43.9220], [-19.9220, -43.9360]] }
        };

        const corridorLayers = {};

        Object.keys(corridorData).forEach(key => {
            const item = corridorData[key];
            const line = L.polyline(item.coords, {
                color: '#dc2626',
                weight: 6,
                opacity: 0.85
            }).addTo(map);
            line.bindPopup(`<b>Corredor de acesso à Área Central</b><br>${item.name}<br><small>Traçado ilustrativo; confirme o trecho na sinalização oficial.</small>`);
            corridorLayers[key] = line;
        });

        const tobogaCoords = [
            [[-19.9250, -43.9220], [-19.9290, -43.9205]],
            [[-19.9320, -43.9215], [-19.9300, -43.9210]]
        ];

        const tobogaLayers = [];
        tobogaCoords.forEach(c => {
            const line = L.polyline(c, {
                color: '#7f1d1d',
                weight: 7,
                dashArray: '8, 8',
                opacity: 0.95
            }).addTo(map).bindPopup('<b>Tobogã da Av. do Contorno</b><br>Proibição Total 24h para Carga');
            tobogaLayers.push(line);
        });

        const legend = L.control({ position: 'bottomright' });
        legend.onAdd = function () {
            const div = L.DomUtil.create('div', 'legend-control');
            div.innerHTML = `
                <div class="legend-title">Legenda do mapa</div>
                <div class="legend-item">
                    <span class="legend-color legend-area"></span>
                    <span><strong>Área Central</strong><small>Região sujeita às regras da Área Central. Laranja identifica a área; na consulta, vermelho = restrição e verde = liberado.</small></span>
                </div>
                <div class="legend-item">
                    <span class="legend-color legend-corridor"></span>
                    <span><strong>Corredores de acesso</strong><small>Trechos viários cadastrados para acesso à Área Central, destacados em vermelho.</small></span>
                </div>
                <div class="legend-item">
                    <span class="legend-color legend-toboga"></span>
                    <span><strong>Tobogã da Av. do Contorno</strong><small>Trecho com proibição total 24h para veículos de carga.</small></span>
                </div>
                <div class="legend-note">Pontos de via são referências de localização, não o traçado completo. Coordenadas: OpenStreetMap contributors.</div>
            `;
            return div;
        };
        legend.addTo(map);

        const vehicleSelect = document.getElementById('vehicle-type');
        const daySelect = document.getElementById('day-select');
        const timeSelect = document.getElementById('time-select');
        const locationSelect = document.getElementById('location-select');
        const locationAlert = document.getElementById('location-alert');
        const btnNow = document.getElementById('btn-now');

        const statusCard = document.getElementById('status-card');
        const statusTitle = document.getElementById('status-title');
        const statusDesc = document.getElementById('status-desc');

        function checkRestrictions() {
            const vehicle = vehicleSelect.value;
            const day = daySelect.value;
            const timeVal = timeSelect.value;

            if (!timeVal) return;

            const [hours, minutes] = timeVal.split(':').map(Number);
            const timeInMins = hours * 60 + minutes;

            let centralRestricted = false;
            let corridorRestricted = false;

            if (vehicle === 'trailer') {
                centralRestricted = true;
                if (day === 'weekday') {
                    if ((timeInMins >= 420 && timeInMins <= 540) || (timeInMins >= 1020 && timeInMins <= 1200)) {
                        corridorRestricted = true;
                    }
                } else if (day === 'saturday') {
                    if (timeInMins >= 420 && timeInMins <= 540) {
                        corridorRestricted = true;
                    }
                }
            } else {
                if (day === 'weekday') {
                    if (timeInMins >= 420 && timeInMins <= 1200) centralRestricted = true;
                    if ((timeInMins >= 420 && timeInMins <= 540) || (timeInMins >= 1020 && timeInMins <= 1200)) corridorRestricted = true;
                } else if (day === 'saturday') {
                    if (timeInMins >= 420 && timeInMins <= 900) centralRestricted = true;
                    if (timeInMins >= 420 && timeInMins <= 540) corridorRestricted = true;
                }
            }

            if (centralRestricted || corridorRestricted) {
                statusCard.className = 'status-restricted';
                statusTitle.innerHTML = '<i class="fa-solid fa-ban"></i> TRÁFEGO PROIBIDO';

                let desc = '';
                if (centralRestricted && corridorRestricted) desc = 'Restrição na Área Central E nos Corredores.';
                else if (centralRestricted) desc = 'Restrição na Área Central (Liberado nos Corredores).';
                else desc = 'Restrição nos Corredores de Tráfego.';

                statusDesc.innerText = desc;
                centralAreaPoly.setStyle({ fillColor: '#ef4444', color: '#b91c1c' });
            } else {
                statusCard.className = 'status-allowed';
                statusTitle.innerHTML = '<i class="fa-solid fa-circle-check"></i> TRÁFEGO LIBERADO';
                statusDesc.innerText = 'Livre circulação no horário selecionado.';
                centralAreaPoly.setStyle({ fillColor: '#22c55e', color: '#15803d' });
            }

            updateLocationNotification();
        }

        function updateLocationNotification() {
            const val = locationSelect.value;
            if (!val) {
                locationAlert.style.display = 'none';
                return;
            }

            const vehicle = vehicleSelect.value;
            const day = daySelect.value;
            const timeVal = timeSelect.value;
            const [hours, minutes] = timeVal.split(':').map(Number);
            const timeInMins = hours * 60 + minutes;

            let isRestricted = false;
            let ruleText = '';
            let pdfCategory = '';

            const selectedStreet = hipercentroStreets[val];
            if (selectedStreet && selectedStreet.referenceOnly) {
                locationAlert.className = 'alert-pdf-corridor';
                locationAlert.innerHTML = '<strong>REFERÊNCIA NO MAPA</strong><br>O PDF define regras para trechos específicos da Av. do Contorno. Selecione o trecho correspondente em Corredores de Tráfego ou Tobogã para consultar a restrição.';
                locationAlert.style.display = 'block';
                return;
            }

            if (val === 'central_area' || selectedStreet) {
                pdfCategory = 'central';
                const locName = selectedStreet ? selectedStreet.name + ' (Hipercentro)' : 'Área Central';
                if (vehicle === 'trailer') {
                    isRestricted = true;
                    ruleText = `${locName}: Carretas / Cavalos Mecânicos têm proibição total 24h na Área Central.`;
                } else {
                    if (day === 'weekday' && timeInMins >= 420 && timeInMins <= 1200) {
                        isRestricted = true;
                        ruleText = `${locName}: Área Central restrita das 07h às 20h em dias úteis.`;
                    } else if (day === 'saturday' && timeInMins >= 420 && timeInMins <= 900) {
                        isRestricted = true;
                        ruleText = `${locName}: Área Central restrita das 07h às 15h aos sábados.`;
                    } else {
                        ruleText = `${locName}: Horário livre de restrição na Área Central para este veículo.`;
                    }
                }
            } else if (val === 'toboga') {
                pdfCategory = 'toboga';
                isRestricted = true;
                ruleText = 'Tobogã da Av. do Contorno: Proibição TOTAL 24h para todos os veículos pesados e carretas.';
            } else {
                pdfCategory = 'corridor';
                if (day === 'weekday') {
                    if ((timeInMins >= 420 && timeInMins <= 540) || (timeInMins >= 1020 && timeInMins <= 1200)) {
                        isRestricted = true;
                        ruleText = 'Corredor Restrito nos picos: 07h às 09h e 17h às 20h.';
                    } else {
                        ruleText = 'Tráfego liberado neste corredor fora do horário de pico.';
                    }
                } else if (day === 'saturday') {
                    if (timeInMins >= 420 && timeInMins <= 540) {
                        isRestricted = true;
                        ruleText = 'Corredor Restrito no sábado das 07h às 09h.';
                    } else {
                        ruleText = 'Tráfego liberado neste corredor no sábado após às 09h.';
                    }
                } else {
                    ruleText = 'Tráfego totalmente livre em corredores aos domingos e feriados.';
                }
            }

            locationAlert.style.display = 'block';

            if (isRestricted) {
                locationAlert.className = 'alert-restricted';
                locationAlert.innerHTML = `<strong><i class="fa-solid fa-triangle-exclamation"></i> PROIBIDO NO LOCAL</strong><br>${ruleText}`;
            } else {
                let alertClass = 'alert-pdf-central';
                if (pdfCategory === 'corridor') alertClass = 'alert-pdf-corridor';
                if (pdfCategory === 'toboga') alertClass = 'alert-pdf-toboga';

                locationAlert.className = alertClass;
                locationAlert.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> LIBERADO NO LOCAL</strong><br>${ruleText}`;
            }
        }

        locationSelect.addEventListener('change', (e) => {
            const val = e.target.value;

            if (activeStreetMarker) {
                map.removeLayer(activeStreetMarker);
                activeStreetMarker = null;
            }

            if (!val) {
                locationAlert.style.display = 'none';
                return;
            }

            if (val === 'central_area') {
                map.fitBounds(centralAreaPoly.getBounds(), { padding: [30, 30] });
                centralAreaPoly.openPopup();
            } else if (hipercentroStreets[val]) {
                const street = hipercentroStreets[val];
                map.setView(street.coords, 16);
                const popupDescription = street.referenceOnly
                    ? 'Ponto de referência. Consulte os trechos específicos em Corredores de Tráfego ou Tobogã.'
                    : 'Pertence à Área Central (Hipercentro)';
                activeStreetMarker = L.marker(street.coords).addTo(map)
                    .bindPopup(`<b>${street.name}</b><br>${popupDescription}`)
                    .openPopup();
            } else if (val === 'toboga') {
                const bounds = L.latLngBounds(tobogaCoords[0].concat(tobogaCoords[1]));
                map.fitBounds(bounds, { padding: [50, 50] });
                tobogaLayers[0].openPopup();
            } else if (corridorLayers[val]) {
                const layer = corridorLayers[val];
                map.fitBounds(layer.getBounds(), { padding: [50, 50] });
                layer.openPopup();
            }

            updateLocationNotification();

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });

        btnNow.addEventListener('click', () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            timeSelect.value = `${hours}:${minutes}`;

            const dayIndex = now.getDay();
            if (dayIndex === 0) daySelect.value = 'sunday';
            else if (dayIndex === 6) daySelect.value = 'saturday';
            else daySelect.value = 'weekday';

            checkRestrictions();
        });

        vehicleSelect.addEventListener('change', checkRestrictions);
        daySelect.addEventListener('change', checkRestrictions);
        timeSelect.addEventListener('change', checkRestrictions);

        checkRestrictions();