import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function DropdownTags() {
  // var tagList<Tag> = [];
  return (
    <>
      
          <DropdownButton
            as={ButtonGroup}
            drop={'end'}
            variant='warning'
            title='Search for ...'
          >
            {['River', 'Temple'].map((tag) => (
                <Dropdown.Item eventKey="1">{tag}</Dropdown.Item>
            ))}
          </DropdownButton>
      
    </>
  );
}

export default DropdownTags;