import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './layout/header/header';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*π The args you need here will depend on your component */
};
