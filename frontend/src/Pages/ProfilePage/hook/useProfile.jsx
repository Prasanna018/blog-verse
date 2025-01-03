import { useState } from 'react';
import useAuthUser from '../../../hook/useAuthUser';
import { useEffect } from 'react';
export const useProfile = () => {
    const { authUser } = useAuthUser()
    console.log(authUser)
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        username: '',
        email: '',
        bio: '',
        avatar: null
    });
    const [tempProfile, setTempProfile] = useState(profile);

    useEffect(() => {
        if (authUser) {
            const { username, email, bio, avatar } = authUser;
            const userProfile = { username, email, bio, avatar };
            setProfile(userProfile);
            setTempProfile(userProfile);
        }
    }, [authUser]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setProfile(tempProfile);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempProfile(profile);
        setIsEditing(false);
    };

    return {
        isEditing,
        setIsEditing,
        profile,
        tempProfile,
        setTempProfile,
        handleInputChange,
        handleSave,
        handleCancel
    };
};