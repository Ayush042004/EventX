import { Users, Copy, Check, User, Upload } from 'lucide-react';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import organizeService from '../backend/organize';
import { Particles } from "./magicui/particles";
import participantService from '../backend/participant.js'

export default function TeamInvite() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [copied, setCopied] = React.useState(false);
  const [bannerFile, setBannerFile] = useState(null);
  const [data, setData] = useState(null)

  const { teamId } = useParams()
  
  const [teamData,setTeamData] = useState(null)

  useEffect(()=>{
      const fetchData = async()=>{
        try{
          console.log("hello");
        
          const data = await participantService.getTeam(teamId)
          console.log(data);
          
          setData(data)}
        
      
        catch (error) {
        console.log(error.message);
        } 
      }
      fetchData()
  },[])

  
  

  // Mock data based on the provided JSON

  setData({
    teamID: teamId,
    teamName: data.teamName,
    memberIds: ['member1', 'member2', 'member3'],
    createdAt: data.createdAt
  })
  const onSubmit = async (data) => {
    data.append("banner", bannerFile);
  }


  const handleFileChange = (event) => {
    setBannerFile(event.target.files[0]);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(teamData.teamID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-20">
    
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="p-6">
          {/* Team Header */}
          {teamData.teamName?(<div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {teamData.teamName}
              </h1>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{teamData.memberIds.length} members</span>
                </div>
                {/* Member List */}
                <div className="space-y-1 mt-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>John Smith (Team Leader)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>Sarah Johnson</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>Mike Chen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>):(<div className="text-center text-gray-500">Loading team data...</div>)}
        

          {/* Team ID Section */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team Invitation Code
            </label>
            <div className="flex items-center justify-between bg-white rounded-md border border-gray-300 p-3">
              <code className="text-sm font-mono text-gray-900">
                {teamData.teamID}
              </code>
              <button
                onClick={handleCopyCode}
                className="ml-3 inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-500" />
                )}
                <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Share this code with your teammates to invite them to join your team
            </p>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">How to join:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Click on "Join Team" in the dashboard</li>
              <li>Enter the team invitation code</li>
              <li>Click "Join" to become a team member</li>
            </ol>
          </div>
        </div>
      </div>
    
      </div>
  );
}