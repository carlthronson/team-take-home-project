import { useCollapse } from 'react-collapsed';
import styled from 'styled-components';
import { Avatar, Image } from 'antd';
import React, { useState, useEffect } from 'react';

const TeamMemberArea = styled.div`
    border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 90px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #DCDCDC;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`   ;

export default function TeamMember({ member, index, total }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <TeamMemberArea>
      <div>{member.first_name} {member.last_name}</div>
      <div>{member.phone_number}</div>
      <div>{member.email}</div>
    </TeamMemberArea>
  );
}

