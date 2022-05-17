const OUTLOOK       = ["SUNNY","OVERCAST","RAINY"];
const TEMPERATURE   = ["HOT","MILD","COLD"];
const HUMIDITY      = ["HIGH","NORMAL"];
const WINDY         = ["TRUE","FALSE"];

const START = () =>{
    let questionContainer = document.getElementById("questions");

    let html = `
                <div class="row">
                    <div class="col-md-12 text-center"> 
                        <h5 class="">How is the outlook today?</5>
                    </div>
                    
                    <div class="col-md-12">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="group" value="${OUTLOOK[0]}">
                            <label class="form-check-label" for="exampleRadios1">
                                ${OUTLOOK[0]}
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="group" value="${OUTLOOK[1]}">
                            <label class="form-check-label" for="exampleRadios1">
                                ${OUTLOOK[1]}
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="group" value="${OUTLOOK[2]}">
                            <label class="form-check-label" for="exampleRadios1">
                                ${OUTLOOK[2]}
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button type="button" onclick="OUTLOOKDECIDE()" class="btn btn-success">NEXT</button>
                    </div>
                </div>
    `;

    questionContainer.innerHTML = html;
};


const OUTLOOKDECIDE = () => {
    let decision = $("input[type=radio]:checked").val();
};

const TEMPERATUREDECIDE = () => {
    let decision = $("input[type=radio]:checked").val();
};

const HUMIDITYDECIDE = () => {
    let decision = $("input[type=radio]:checked").val();
};

const WINDYDECIDE = () => {
    let decision = $("input[type=radio]:checked").val();
};



START();