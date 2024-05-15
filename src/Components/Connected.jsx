import React from "react";
import image1 from './images/images (1).jpeg.jpg'
import image2 from './images/images (2).jpeg.jpg'
import image3 from './images/images.jpeg.jpg'
import Navbar from "./Navbar";

const Connected = (props) => {
    console.log('This is my status', props.votingStatus);
    return (

        <div>
            <Navbar />

            <div className='flex justify-center items-center lg:px-[10rem] px-[10rem] pt-[6rem] bg-gradient-to-r from-slate-950 to-slate-900 lg:h-screen h-full'>
                
                <div>
                    <div className="pb-10 lg:pt-0 pt-20">
                        <p className="text-center text-white lg:text-md text-md"><span className="text-md text-slate-400">Metamask Account:</span> <br /> {props.account}</p>
                        <p className="text-center text-white pt-2 text-xs">Remaining Time: {props.remainingTime}</p>
                    </div>


                    <div className='flex gap-12 lg:flex-row flex-col'>
                        <div className="w-full">
                            <div className=' bg-slate-900 rounded-xl w-full'>
                                <div className="lg:h-60 overflow-hidden">
                                    <img src={image1} alt="" className='lg:w-full w-full  rounded-lg'/>
                                </div>

                                <div className="px-5 py-5 flex items-center">
                                    <h2 className="text-white text-xs">Netumbo Nandi-Ndaitwah</h2>
                                    <p className="ml-auto text-white text-xs">(SWAPO)</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className=' bg-slate-900 rounded-xl w-full'>
                                <div className="h-60 overflow-hidden">
                                    <img src={image2} alt="" className='lg:w- lg:h-56 w-full rounded-lg'/>
                                </div>

                                <div className="px-5 py-5 flex items-center">
                                    <h2 className="text-white text-xs">Panduleni Itula</h2>
                                    <p className="ml-auto text-white text-xs">(IPC)</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className=' bg-slate-900 rounded-xl w-full'>
                                <div className="h-60 overflow-hidden">
                                    <img src={image3} alt="" className='lg:w-full w-full lg:h-56 rounded-lg'/>
                                </div>

                                <div className="px-5 py-5 flex items-center">
                                    <h2 className="text-white text-xs">McHenry Venaani</h2>
                                    <p className="ml-auto text-white text-xs">(PDM)</p>
                                </div>
                            </div>
                        </div>


                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box h-[40rem] max-w-[60rem]">
                            <h3 className="font-bold text-lg pt-10">Hello!, Please Vote below</h3>
                            <form method="dialog">
                                <select className="select w-full border border-slate-300 mt-5">
                                <option disabled selected>Select your Region!</option>
                                <option>Khomas</option>
                                <option>Ohangwena</option>
                                <option>Omusati</option>
                                <option>Oshikoto</option>
                                <option>Oshana</option>
                                <option value="">Erongo</option>
                                <option value="">Otjozondjupa</option>
                                <option value="">Kavango East</option>
                                <option value="">Zambezi</option>
                                <option value="">Kunene</option>
                                <option value="">Kavango West</option>
                                <option value="">Hardap</option>
                                <option value="">!Karas</option>
                                <option value="">Omaheke</option>
                                </select>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>

                            <div className="pt-5">

                        
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="text-md text-slate-600">Candidate Index</th>
                                        <th className="text-md text-slate-600">Candidate Name</th>
                                        <th className="text-md text-slate-600">Candidate Votes</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.candidates.map((candidate, index) => (
                                    <tr className="bg-none">
                                        <th>{candidate.index}</th>
                                        <td>{candidate.name}</td>
                                        <td className="bg-gray-300 w-fit">{candidate.voteCount}</td>
                                    </tr>
                                    ))}
                                    </tbody>
                                </table>
                                </div>
     
                                { props.showButton ? (
                                    <p className="text-center pt-20">You have already voted 😊😊</p>
                                ) : (
                                    <div>
                                        <form action="" className="pt-10" onSubmit={props.voteFunction}>
                                            <input type="number" 
                                                placeholder="Entern Candidate Index" value={props.number} 
                                                onChange={props.handleNumberChange}
                                                required 
                                                className="input input-bordered w-full" 
                                            />
                                            
                                            <button  class="btn btn-active  btn-primary 
                                                bg-slate-900 text-white border-none 
                                                hover:bg-slate-800 py-3 px-10 mt-5 w-full">
                                                {props.isLoading === true ? "Loading..." : "Vote Now"}
                                            </button>
                                        </form>
                                    </div>
                                )}
                                
                       
                            </div>
                            </div>
                        </dialog>
                    </div>

                    <button onClick={()=>document.getElementById('my_modal_3').showModal()} class="btn w-1/2 btn-active flex m-auto mt-5 btn-primary bg-white text-black border-none hover:bg-purple-100 py-3 px-10">
                        Continue to vote
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Connected;