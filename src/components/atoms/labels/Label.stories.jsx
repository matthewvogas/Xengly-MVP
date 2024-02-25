import React, { lazy } from 'react';
import Label from './label.jsx';
import './label.css'


export default {
  title: 'Label',
  component: Label,
};

export const Title = () => <Label className="Title" texto="Hola, Mundo!" />;
export const TitleText = () => <Label className="TitleText" texto="Hola, Mundo!" />;

export const SubTitle = () => <Label className="SubTitle" texto="Hola, Mundo!" />;
export const SubTitleText = () => <Label className="SubTitleText" texto="Hola, Mundo!" />;

export const badgeLabel = () => <Label className="badgeLabel" texto="Hola, Mundo!" />;
