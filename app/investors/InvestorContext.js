'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import ApiService from '@/app/services/api';

const InvestorContext = createContext();

export function InvestorProvider({ children }) {
    const [investorData, setInvestorData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInvestorData = async () => {
            try {
                const data = await ApiService.getInvestorData();
                setInvestorData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching investor data:', error);
                setLoading(false);
            }
        };
        fetchInvestorData();
    }, []);

    return (
        <InvestorContext.Provider value={{ investorData, setLoading, loading }}>
            {children}
        </InvestorContext.Provider>
    );
}

export const useInvestorData = () => {
    const context = useContext(InvestorContext);
    if (context === undefined) {
        throw new Error('useInvestorData must be used within an InvestorProvider');
    }
    return context;
};
