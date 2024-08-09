// `app/page.jsx` is the UI for the `/` URL
'use client'
import { useState } from 'react';
import Team from '@/components/Team';
import CreateMember from '@/components/CreateMember';
import EditMember from '@/components/EditMember';

const VIEWS = {
    SHOW_LIST: 'SHOW_LIST',
    CREATE_MEMBER: 'CREATE_MEMBER',
    EDIT_MEMBER: 'EDIT_MEMBER'
};

export default function Page() {

    const [mode, setMode] = useState(VIEWS.SHOW_LIST);
    const [member, setMember] = useState(null)

    const showList = () => {
        setMode(VIEWS.SHOW_LIST);
    }

    const showCreateMember = () => {
        setMode(VIEWS.CREATE_MEMBER);
    }

    const showEditMember = (member) => {
        setMember(member);
        setMode(VIEWS.EDIT_MEMBER);
    }

    let content;
    switch (mode) {
        case VIEWS.CREATE_MEMBER:
            content = <CreateMember showList={showList}></CreateMember>;
            break;
        case VIEWS.EDIT_MEMBER:
            content = <EditMember showList={showList} member={member}></EditMember>;
            break;
        default:
            content = <Team showCreateMember={showCreateMember} showEditMember={showEditMember}></Team>;
            break;
    }
    return <div>{content}</div>
}

