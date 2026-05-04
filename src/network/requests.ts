import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import apiClient from './apiClient';
import { EndPointConstants, getEndpointUrl } from './const';

export type OnboardingSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  cta_label: string;
  sort_order: 1;
  is_active: true;
  created_at: string;
  updated_at: string;
};

export const fetchOnboardingData = async (): Promise<OnboardingSlide[]> => {
  const response = await apiClient.get<OnboardingSlide[]>(
    getEndpointUrl(EndPointConstants.onboarding),
  );
  return response.data?.data || [];
};

export const onLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await apiClient.post(
    getEndpointUrl(EndPointConstants.login),
    { email, password },
  );
  return response?.data || undefined;
};

export const onSignUp = async ({
  email,
  name,
  password,
  phone,
}: {
  email: string;
  name: string;
  password: string;
  phone: string;
}) => {
  const response = await apiClient.post(
    getEndpointUrl(EndPointConstants.signup),
    { email, name, password, phone },
  );
  return response?.data || undefined;
};

export const getHomeData = async () => {
  const response = await apiClient.get(getEndpointUrl(EndPointConstants.home));
  return response?.data || [];
};

export const getServices = async (serviceId: string) => {
  const response = await apiClient.get(
    `${getEndpointUrl(EndPointConstants.services)}${serviceId}`,
  );
  return response?.data || [];
};

export const getServicesItems = async (serviceItemId: string) => {
  const response = await apiClient.get(
    `${getEndpointUrl(EndPointConstants.serviceItems)}${serviceItemId}`,
  );
  return response?.data || [];
};

// Cart Items
export const onAddToCart = async ({
  item_id,
  quantity,
}: {
  item_id: string;
  quantity: number;
}) => {
  const response = await apiClient.post(
    getEndpointUrl(EndPointConstants.addToCart),
    { item_id, quantity },
  );
  console.log('🚀 ~ onAddToCart ~ response:', response);
  return response?.data || undefined;
};

export const onUpdateCart = async ({
  item_id,
  quantity,
}: {
  item_id: string;
  quantity: number;
}) => {
  const response = await apiClient.patch(
    getEndpointUrl(EndPointConstants.cartItem) + item_id,
    { quantity },
  );
  return response?.data || undefined;
};

export const onDeleteCartItem = async ({
  item_id,
}: {
  item_id: string;
}) => {
  const response = await apiClient.delete(
    getEndpointUrl(EndPointConstants.cartItem) + item_id,
  );
  return response?.data || undefined;
};

export const getCart = async () => {
  const response = await apiClient.get(
    `${getEndpointUrl(EndPointConstants.cart)}`,
  );
  return response?.data || [];
};
