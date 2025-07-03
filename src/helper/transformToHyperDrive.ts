import type { OpportunityData } from '@/services/hyperdriveApi';

interface TransformDataProps {
  customerInfo: any;
  dealerInfo: any;
  paintServiceInfo: any;
  selectedPanels: any[];
  scheduleDate: string | string[];
  referenceNumber: string;
  totalCost: number;
}

export const transformToHyperDrive = ({
  customerInfo,
  dealerInfo,
  paintServiceInfo,
  selectedPanels: _selectedPanels, // underscore prefix to indicate unused
  scheduleDate,
  referenceNumber
  // totalCost - not currently used but may be needed later
}: TransformDataProps): OpportunityData => {
  
  // Ensure all required data is available with fallbacks
  const safeCustomerInfo = customerInfo || {};
  const safeDealerInfo = dealerInfo || {};
  const safePaintServiceInfo = paintServiceInfo || {};
  // safeSelectedPanels - panels data available if needed later
  // const safeSelectedPanels = Array.isArray(selectedPanels) ? selectedPanels : [];
  
  // Generate opportunity ID based on reference number or timestamp
  const opportunityId = parseInt(referenceNumber.replace(/\D/g, '')) || Date.now();
  
  // Map your dealer code to a location ID
  const getLocationId = (dealerCode: string) => {
    const dealerLocationMap: Record<string, number> = {
      '102': 98, // Example mapping
      // Add more mappings as needed
    };
    return dealerLocationMap[dealerCode] || 98; // Default location ID
  };

  const locationId = getLocationId(safeDealerInfo?.dealerCode || '');

  return {
    opportunityId,
    estimatesId: opportunityId + 1000,
    repairOrderNumber: referenceNumber || null,
    locationId,
    dataSourceId: 2,
    active: true,
    archived: false,
    userId: "10569569",
    
    location: {
      locationId,
      locationCode: parseInt(safeDealerInfo?.dealerCode || '102'),
      name: safeDealerInfo?.dealerName || 'Default Dealer',
    },
    
    opportunityDetail: {
      opportunityId,
      drivable: true,
      towIn: false,
      fastLane: false,
      oemOnly: true,
      rental: false,
      rentalCompanyId: null,
      rentalCompany: null,
      languageId: null,
      nextContactDate: Array.isArray(scheduleDate) && scheduleDate.length > 0 
        ? scheduleDate[0] 
        : typeof scheduleDate === 'string' 
          ? scheduleDate 
          : null,
      sentToLocationSupport: false,
      estimateExists: true,
      loadLevelAllowed: null,
      isValetService: null,
      dealershipEmail: safeDealerInfo?.emailAddress2 || null
    },
    
    opportunityInsurance: {
      partnerId: 1, // Required field that was missing
      insuranceCompanyId: null,
      claimNumber: null,
      deductible: null,
      policyNumber: null,
      agentName: null,
      agentPhone: null,
      isDirectPay: false
    },
    
    customerOpportunities: [
      {
        customerId: Date.now(),
        opportunityId,
        primaryContact: true,
        customer: {
          personId: Date.now(),
          originalId: 0,
          firstName: safeCustomerInfo?.firstName || '',
          lastName: safeCustomerInfo?.lastName || '',
          email: safeCustomerInfo?.email || '',
          active: true,
          phones: [
            {
              phoneId: Date.now() + 1,
              phoneTypeId: 1,
              entityTypeId: 0,
              phoneType: "Mobile",
              phoneNumber: safeCustomerInfo?.telephone || '',
              smsNotification: false
            }
          ],
          addresses: [
            {
              fullAddress: null,
              addressId: Date.now() + 2,
              addressLine1: safeCustomerInfo?.address || 'Default Address',
              addressLine2: "",
              city: safeCustomerInfo?.city || 'Default City',
              zipCode: safeCustomerInfo?.zipCode || '00000',
              stateCode: "TX", // You'll need to derive this
              countryCode: "US",
              latitude: null,
              longitude: null
            }
          ]
        }
      }
    ],
    
    vehicle: {
      vehicleId: Date.now() + 3,
      vehicleMakeId: null,
      modelYear: parseInt(safePaintServiceInfo?.year) || new Date().getFullYear(),
      modelName: safePaintServiceInfo?.model || '',
      vin: "KMHL14JA1MA123456", // Using the fake VIN we discussed
      plateNum: "",
      plateState: "",
      vehicleMake: null,
      makeName: "HYUNDAI",
      makeShortCode: "HYU"
    },
    
    adjuster: {
      personId: Date.now() + 4,
      originalId: 0,
      firstName: safeDealerInfo?.serviceAdvisorFirstName || '',
      lastName: safeDealerInfo?.serviceAdvisorLastName || '',
      email: safeDealerInfo?.emailAddress2 || '',
      active: true,
      phones: [],
      addresses: []
    },
    
    notes: [],
    createdBy: `${safeCustomerInfo?.firstName || ''} ${safeCustomerInfo?.lastName || ''}`.trim(),
    createdDate: new Date().toISOString(),
    appointment: null,
    numberOfContacts: 0,
    numberOfContactsPerDay: 0
  };
};